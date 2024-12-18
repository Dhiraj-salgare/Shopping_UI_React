
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {toast} from 'react-hot-toast'
import {remove} from'../redux/Slices/CartSlice'
function CartItem({item,itemindex}){
    const dispatch=useDispatch()
    function removefromcart(){
        dispatch(remove(item.id))
        toast.success("item is removed");
        

    }


    return(
        <div className="px-5 mt-5">

            <div className="flex max-w-[600px] gap-6 text-justify">
                <div className="h-[180px] min-w-[100px]">
                    <img src={item.image} className="w-full h-full"></img>
                </div>
                <div className="flex flex-col gap-2">
                    <h1>{item.title}</h1>
                    <h1>{item.description}</h1>
                    <div>
                        <p className="text-green-600">${item.price}</p>
                        <div onClick={removefromcart}>
                        <MdDelete></MdDelete>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartItem;