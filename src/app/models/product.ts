export class Product {
  id!: number;
  nom!: string;
  description!: string;
  prix!: number;
  plusZyeda: PlusZyedaItem[] = [];
}

export class Cart{
    id!: number;
    prixTotale!: number;
    quantite!: number;
    products!: Product[];
}

export class PlusZyedaItem {
  nom!: string;
  prix!: number;
}

