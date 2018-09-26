export class Hero {
  role: String;
  id: string;
  name: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
  description: String;

  constructor(id: string, name: string, rating: number, createdAt: Date, updatedAt: Date, description: String, role: String) {
    this.id = id;
    this.name = name;
    this.rating = rating;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.description = description;
    this.role = role;
  }

  getStyle(): number {
    const midChar = this.name.length / 2;
    const midCharCode: number = this.name.charCodeAt(midChar);
    return midCharCode % 5;
  }

  getColor(): string {
    switch(this.getStyle()) {
      case 0:
        return '#cf8acf';
      case 1:
        return '#6461A0';
      case 2:
        return '#949396';
      case 3:
        return '#314CB6';
      case 4:
        return '#0A81D1';
      default:
        return '#cf8acf';
    }
  }
}
