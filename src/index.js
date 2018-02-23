module.exports = function solveEquation(equation) {
    let [a,b,c] = equation.match(/(-\s?\d*|\+\s?\d*|^\d+)/g);
    a = +a;
    b = +b.replace(' ','');
    c = +c.replace(' ','');
    let x1 = (-b + Math.pow((b*b - 4*a*c),0.5))/2/a;
    let x2 = (-b - Math.pow((b*b - 4*a*c),0.5))/2/a;
    if (a > 0) {
        return [Math.round(x2),Math.round(x1)]
    } else {
      return [Math.round(x1),Math.round(x2)]
    }
};
