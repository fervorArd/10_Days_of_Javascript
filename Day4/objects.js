/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    Rectangle.prototype.perimeter = 2*(this.length + this.width);
    Rectangle.prototype.area = this.length * this.width;
}
