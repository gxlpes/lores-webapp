import { useNavigate } from "react-router-dom";
import { getAfterSlash } from "../common/getAfterSlash";


export const responseHandler = (response: any, method: string) => {

    switch (method) {
        case "post":
            let pathAfterSave = getAfterSlash(response.request.responseURL);

            switch (response.status) {
                case 200:
                    window.location.href = `/${pathAfterSave}`;
                    break;
            }
            break;

        case "put":
            let pathAfterUpdate = response.config.url.split("/");
            console.log(response)

            switch (response.status) {
                case 200:
                    window.location.href = `/${pathAfterUpdate[1]}`;
                    break;
            }
            break;

        case "delete":
            window.location.reload();
    }


}