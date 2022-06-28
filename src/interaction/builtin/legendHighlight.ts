import { LegendHighlightInteraction } from '../../spec';
import { createInteraction } from '../create';

export type LegendHighlightOptions = Omit<LegendHighlightInteraction, 'type'>;

export const InteractionDescriptor = (options?: LegendHighlightOptions) => ({
  start: [
    {
      trigger: 'legend-item:pointermove',
      action: [
        { type: 'triggerInfoSelection' },
        { type: 'legendItemSelection', from: 'triggerInfo' },
        { type: 'setItemState', items: 'legendItem', state: 'highlight' },
        { type: 'elementSelection', from: 'triggerInfo' },
        { type: 'highlightElement' },
      ],
    },
  ],
  end: [
    {
      trigger: 'legend-item:pointerleave',
      action: [
        { type: 'triggerInfoSelection' },
        { type: 'legendItemSelection', from: 'triggerInfo' },
        { type: 'setItemState', items: 'legendItem', state: 'highlight' },
        { type: 'elementSelection', from: 'triggerInfo' },
        { type: 'highlightElement' },
      ],
    },
  ],
});

export const LegendHighlight = createInteraction<LegendHighlightOptions>(
  InteractionDescriptor,
);

LegendHighlight.props = {};
