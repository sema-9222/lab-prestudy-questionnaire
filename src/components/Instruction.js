import "./Instruction.css";
import { NavLink } from "react-router-dom";
import { Context } from "./context";
import { useContext } from "react";

export function Instruction(props) {
  var { handleSelect } = useContext(Context);

  return (
    <div className="consent">
      <div className="instruction">
        <h2>HOŞGELDİNİZ!</h2>
        <div className="instruction-p">
          Birazdan ekranda çeşitli videolar gösterilecektir. Videolar araç
          kullanırken karşılaşılmış olan yol sahnelerini içermektedir.
          İzleyeceğiniz videolarda ses bulunmamaktadır, yalnızca görüntü
          sunulmuştur.{" "}
          <b>
            Test sırasında yalnız olabileceğiniz, sessiz ve dikkatinizi
            dağıtabilecek faktörlerden uzak bir ortamda bulunmanız
            gerekmektedir.
          </b>{" "}
          Lütfen videoları gözlerinizi ekrandan ayırmadan dikkatlice izleyin.
          Her bir video sonrasında karşınıza izlediğiniz video ile ilgili{" "}
          <b>6</b> soru çıkacaktır. Sizden istenen her video sonrasında
          izlediğiniz video ile ilgili olan 6 soruyu cevaplamanızdır. Sessiz
          olduğunuz bir ortamda bulunduğunuzdan emin olduktan sonra teste geçmek
          için <b>"DEVAM"</b> butonuna tıklayınız.
        </div>
        <NavLink className="btns btn2" to="/Videos" onClick={handleSelect}>
          DEVAM
        </NavLink>
      </div>
    </div>
  );
}
