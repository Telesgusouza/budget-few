import { toast } from "react-toastify";
import { IGuestPot, IGuestUser, IPot, IUpdate } from "./interfaces";
import { formatDate } from "./utils";
import store from '../config/redux/store';
import { listPostUpdate } from "./redux/User.store";

export function guestUserAddPot(data: IPot, guest: IGuestUser) {

    const newPot: IGuestPot =
        { updates: [], pot: data, lastUpdate:  formatDate((new Date()).toString())};

    guest.pots.push(newPot);

    savePot(data.earnedValue, data.id, guest);
    toast.success("Pote adicionado com sucesso")

    return true;
}

export function guestUserEditPot(data: IPot, guest: IGuestUser, id: string) {
    const index = guest.pots.findIndex(item => item.pot.id === id);

    if (index != -1) {
        guest.pots[index].pot = data;
        guest.pots[index].lastUpdate = formatDate((new Date()).toString());

        savePot(data.earnedValue, id, guest);

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
        date: formatDate((new Date().toString())),
        value: value,
    };

    guest.pots[index].updates.push(date);
    localStorage.setItem("guest user", JSON.stringify(guest));

    store.dispatch(listPostUpdate({
        total: guest.pots.length,
        list: guest.pots
    }));

}