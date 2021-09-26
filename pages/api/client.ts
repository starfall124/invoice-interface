import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse,
): void {
    res.status(200).json([
        { value: "George Young", label: "George Young" },
        {
            value: "Ryan Marinano",
            label: "Ryan Marinano",
        },
        {
            value: "Carl Dickens",
            label: "Carl Dickens",
        },
        {
            value: "Justin Ferguson",
            label: "Justin Ferguson",
        },
        {
            value: "Adrian Paterson",
            label: "Adrian Paterson",
        },
        {
            value: "Sean North",
            label: "Sean North",
        },
        {
            value: "Oliver Lambert",
            label: "Oliver Lambert",
        },
        {
            value: "Cameron Mathis",
            label: "Cameron Mathis",
        },
        {
            value: "Sebastian Dickens",
            label: "Sebastian Dickens",
        },
        {
            value: "David Parsons",
            label: "David Parsons",
        },
        {
            value: "Cameron Parsons",
            label: "Cameron Parsons",
        },
    ]);
}
