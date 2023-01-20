export type Column = {
    id: number;
    title: string;
    cards: Card[];
  };
  
  export type Card = {
    id: number;
    title: string;
    description: string;
    status: Status,
  };
  
  export type Status = "Not Started" | "In Progress" | "Done";
  