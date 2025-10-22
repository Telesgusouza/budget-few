export function formatNumber(number: number): string {

    return new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(number);
}

export function formatDate(dateString: string | Date): string {
    const date = new Date(dateString);
    
    const dia = date.getDate().toString().padStart(2, '0');
    const mes = (date.getMonth() + 1).toString().padStart(2, '0');
    const ano = date.getFullYear().toString().slice(-2);
    
    return `${dia}/${mes}/${ano}`;
}