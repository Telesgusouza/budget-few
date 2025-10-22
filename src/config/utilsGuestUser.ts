import { toast } from "react-toastify";
import { IGuestUser, IPot, IUpdate } from "./interfaces";
import { formatDate } from "./utils";

export function guestUserAddPot(data: IPot, guest: IGuestUser) {

    const newPot: { updates: IUpdate[], pot: IPot } =
        { updates: [], pot: data };

    guest.pots.push(newPot);

    savePot(data.monthlyAmount, data.id, guest);
    toast.success("Pote adicionado com sucesso")

    return true;
}

export function guestUserEditPot(data: IPot, guest: IGuestUser, id: string) {
    const index = guest.pots.findIndex(item => item.pot.id === id);

    if (index != -1) {
        guest.pots[index].pot = data;

        savePot(data.monthlyAmount, id, guest);

        return true

    } else {
        toast.warn("Pote não existe");
        return false;
    }
}

function savePot(value: number, id: string, guest: IGuestUser) {

    const index = guest.pots.findIndex(item => item.pot.id === id);

    const date: IUpdate = {
        id: "date" + (Math.random()).toString().split(".")[1],
        date: formatDate(new Date()),
        value: value,
    };

    guest.pots[index].updates.push(date);
    localStorage.setItem("guest user", JSON.stringify(guest))

}