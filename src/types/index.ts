import moment from "moment";

export type Client = {
    value: string;
    label: string;
};

export type Invoice = {
    client: string;
    amount: number;
    description: string;
    dueDate: moment.Moment;
};
