
export function formatNumber(number: number): string {

    return new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(number);
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString);

    const dia = date.getDate().toString().padStart(2, '0');
    const mes = (date.getMonth() + 1).toString().padStart(2, '0');
    const ano = date.getFullYear().toString().slice(-2);

    return `${dia}/${mes}/${ano}`;
}

export function calculatePercentage(earned: number, goal: number): number {
    if (goal === 0) return 0;
    return Number(((earned / goal) * 100).toFixed(2));
};


export function validationInput(value: string) {

    if (!value) return true;

    const regex = /^\d*?(,\d{0,2})?$/;
    return regex.test(value);
}
