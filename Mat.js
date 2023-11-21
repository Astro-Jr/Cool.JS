export const PI = 3.1416;

export function getCircumference(radius) {
   try { 
     return 2 * radius * PI;
   } catch(error) {
     return error;
   }
}

export function getCircleArea(radius) {
  try {
    return PI * radius * radius;
  } catch(error) {
    return error;
  }
}

export function getRectArea(width, height) {
  try {
    return width * height; 
  } catch(error) {
    return error;
  }
  
}

export function doTetra(base, height) {
  let res = 1;

  for(let i = 0; i < height; i++){
    res = Math.pow(base, result);
  }

  return result;
}
export function getRectLen(width, height) {
  return 2 * (width + height);
}

export function doHypo(width, height) {
  return Math.pow(width, 2) + Math.pow(height, 2);
}

export function doHypoH(hypo, width) {
  return Math.sqrt(Math.pow(hypo,2) - Math.pow(width , 2));
}

export function doHypoW(hypo, height) {
  return Math.sqrt(Math.pow(hypo, 2) - Math.pow(height, 2));
}

export function domatX(equation) {
   return equation;
}
