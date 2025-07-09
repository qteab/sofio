export interface CircleData {
  totalCircles: number;
  prediabetesCircles: number[];
  unknowingCircles: number[];
}

export const circleData = (): CircleData => {
  const totalCircles = 100;

  // Generate evenly distributed pattern - every third circle starting from index 2
  const prediabetesCircles: number[] = [];
  for (let i = 2; i < totalCircles; i += 3) {
    prediabetesCircles.push(i);
  }

  // Of those with prediabetes, 8 in 10 don't know (80% of the prediabetes circles)
  const unknowingCircles = prediabetesCircles.slice(
    0,
    Math.floor(prediabetesCircles.length * 0.8)
  );

  return {
    totalCircles,
    prediabetesCircles,
    unknowingCircles,
  };
};
