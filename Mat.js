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

export function getRectArea(width, height){
  try {
    return width * height; 
  } catch(error) {
    return error;
  }
  
}
