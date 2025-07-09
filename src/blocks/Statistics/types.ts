export interface CircleProps {
  $isPrediabetes: boolean;
  $isUnknowing: boolean;
  $showFirstStat: boolean;
  $showSecondStat: boolean;
  $animationDelay: number;
}

export interface TextSectionProps {
  $isVisible?: boolean;
  $delay?: number;
}

export interface VisualizationState {
  scrollProgress: number;
  showFirstStat: boolean;
  showSecondStat: boolean;
  showFinalText: boolean;
}
