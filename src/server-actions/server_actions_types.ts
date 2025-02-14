export interface CreatePaymentLinkResponseI {
  _links: {
    redirect: {
      href: string;
    };
    details: {
      href: string;
    };
  };
  id: string;
}

export enum PaymentMethods {
  card = "card",
  google_pay = "google_pay",
  apple_pay = "apple_pay",
  bog_p2p = "bog_p2p",
  bog_loyalty = "bog_loyalty",
  bnpl = "bnpl",
  bog_loan = "bog_loan",
  gift_card = "gift_card",
}

export interface getPaymentLinkActionPayloadI {
  requiredLariAmount: string | number;
  paymentMethod: PaymentMethods;
  receiverIBAN: string;
  plusPoints: number;
  lariAmountTheyReceive: number;
  phone: string;
}

export enum TransactionType {
  SELL = "sell",
  BUY = "buy",
}
