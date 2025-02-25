export interface TimelineItemData {
  id: string;
  date: string;
  title: string;
  description: string;
  actionUrl?: string;
  actionText?: string;
  items: MasonryItemData[];
}

export interface MasonryItemData {
  id: string;
  type: 'image' | 'card' | 'text';
  content: string;
  title?: string; // Optional title for the masonry item
  imageUrl?: string;
  width?: number; // For controlling the size in the masonry grid
  height?: number;
  backgroundColor?: string;
}

export type TimelineOrientation = 'horizontal' | 'vertical';

export interface TimelineProps {
  items: TimelineItemData[];
  orientation?: TimelineOrientation;
  className?: string;
}

export interface TimelineItemProps {
  item: TimelineItemData;
  orientation: TimelineOrientation;
  isVisible?: boolean;
  index: number;
}

export interface MasonryGridProps {
  items: MasonryItemData[];
  isVisible?: boolean;
  animationDelay?: number;
}

export interface MasonryItemProps {
  item: MasonryItemData;
  isVisible?: boolean;
  animationDelay?: number;
}