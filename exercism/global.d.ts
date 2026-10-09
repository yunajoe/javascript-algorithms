type Pizza = "Margherita" | "Caprese" | "Formaggio";
type Extra = "ExtraSauce" | "ExtraToppings";
type PizzaOrder = { pizza: Pizza; extras: Extra[] };

interface Translation {
  translation: string;
  quality: number;
}

type fetchTranslation = (text: string) => Promise<Translation>;
type requestTranslation = (
  text: string,
  callback: (err?: Error) => void,
) => void;
interface ExternalApi {
  fetch: fetchTranslation;
  request: requestTranslation;
}
