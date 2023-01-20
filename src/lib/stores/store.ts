import type { Card, Column } from "../types/types";
import { persistStore } from "./PersistStore";

export const uid = () => Math.floor(Math.random() * 1000);

const defaultColumns: Column[] = [
  {
    id: uid(),
    title: "Todo",
    cards: [
      {
        id: uid(),
        title: "Finish Kanban MVP",
        description: "what you're doing now",
        status: "Not Started",
      },
    ],
  },
  {
    id: uid(),
    title: "In Progress",
    cards: [],
  },
  {
    id: uid(),
    title: "Complete",
    cards: [],
  },
];

const getNewColumn = (): Column => {
  return { id: uid(), title: "Title", cards: [] };
};

export const getNewCard = (): Card => {
  return { id: uid(), title: "", description: "", status: "Not Started" };
};

export const store = persistStore("store", defaultColumns);

export const addColumn = () => {
  store.update((prev: Column[]) => [...prev, getNewColumn()]);
};

export const deleteColumn = (id: number, newTitle: string) => {
  store.update((prev: Column[]) =>
    prev.map((col: Column) =>
      col.id === id ? { ...col, title: newTitle } : { ...col }
    )
  );
};

export const updateColumnTitle = (id: number, newTitle: string) => {
  store.update((prev: Column[]) =>
    prev.map((col) =>
      col.id === id ? { ...col, title: newTitle } : { ...col }
    )
  );
};

export const updateCardTitle = (
  colId: number,
  cardId: number,
  newTitle: string
) => {
  store.update((prev: Column[]) =>
    prev.map((col) => {
      if (col.id === colId) {
        return {
          cards: col.cards.map((card: Card) => {
            if (card.id === cardId) {
              return { ...card, title: newTitle };
            } else {
              return card;
            }
          }),
          ...col,
        };
      } else {
        return col;
      }
    })
  );
};

export const updateCardDescription = (
  colId: number,
  cardId: number,
  newTitle: string
) => {
  store.update((prev: Column[]) =>
    prev.map((col) => {
      if (col.id === colId) {
        return {
          cards: col.cards.map((card: Card) => {
            if (card.id === cardId) {
              return { ...card, title: newTitle };
            } else {
              return card;
            }
          }),
          ...col,
        };
      } else {
        return col;
      }
    })
  );
};
