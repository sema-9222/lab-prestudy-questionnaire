import "./Consent.css";
import { NavLink } from "react-router-dom";
import { Context } from "./context";
import { useContext } from "react";

export function Consent(props) {
  var customWindow = window.open("", "_self", "");
  var { setName, setSurName } = useContext(Context);

  return (
    <div className="consent">
      <div className="consent-p">
        <h4>
          BİLGİLENDİRİLMİŞ ONAM FORMU <br /> <br /> LÜTFEN BU DÖKÜMANI
          DİKKATLİCE OKUMAK İÇİN ZAMAN AYIRINIZ
        </h4>
        <div className="first-p">
          Sizi <b>-----</b> danışmanlığında <b>----</b> tarafından yürütülen tez
          çalışmasının bir parçası olan <b>------</b> başlıklı araştırmaya davet
          ediyoruz. Bu araştırmaya katılıp katılmama kararını vermeden önce,
          araştırmanın neden ve nasıl yapılacağını bilmeniz gerekmektedir. Bu
          nedenle bu formun okunup anlaşılması büyük önem taşımaktadır.{" "}
          <u>
            {" "}
            Bu çalışmaya katılmak tamamen gönüllülük esasına dayanmaktadır.
          </u>{" "}
          Çalışmaya katılmama veya katıldıktan sonra herhangi bir anda
          çalışmadan çıkma hakkında sahipsiniz.{" "}
        </div>
        <br />
        Çalışmada sizden çeşitli videoları izlemeniz ve daha sonra izlediğiniz
        videoların duygusal olarak size ne hissettirdiğini oylamanız
        istenecektir.{" "}
        <b>
          Lütfen onam vermeden önce çalışmanın duygu içerikli videolar
          içerdiğini ve bazı videoların rahatsız edici olabileceğini göz önünde
          bulundurunuz.
        </b>{" "}
        Aşağıda bulunan <b>"Kabul Ediyorum"</b> tuşuna basmanız, araştırmaya
        katılım için onam verdiğiniz biçiminde yorumlanacaktır. Bu formlardan
        elde edilecek kişisel bilgiler tamamen gizli tutulacak ve yalnızca
        araştırma amacı ile kullanılacaktır.
        <br />
        <br /> <b> 1. Araştırmayla İlgili Bilgiler:</b> <br />{" "}
        <span className="bold">a. Araştırmanın Amacı:</span> Trafik bağlamında
        karşılaşılan duygusal içeriğe sahip olayların değerlendirilmesi. <br />{" "}
        <span className="bold">b. Araştırmanın İçeriği:</span> Trafik bağlamında
        duygu içerikli çeşitli videoların duygusal değerlik ve uyarılmışlık
        seviyelerinin belirlenmesi. <br />{" "}
        <span className="bold">c. Araştırmanın Nedeni:</span> □ Özgün araştırma
        ■ Tez çalışması <br /> <br />
        <b>2. Çalışmaya Katılım Onayı:</b> <br /> Yukarıda yer alan ve
        araştırmadan önce katılımcıya/gönüllüye verilmesi gereken bilgileri
        okudum ve katılmam istenen çalışmanın kapsamını ve amacını, gönüllü
        olarak üzerime düşen sorumlulukları tamamen anladım. Bu çalışmayı
        istediğim zaman ve herhangi bir neden belirtmek zorunda kalmadan
        bırakabileceğimi ve bıraktığım takdirde herhangi bir olumsuzluk ile
        karşılaşmayacağımı anladım. <br /> <br />
        <b>
          {" "}
          Bu koşullarda söz konusu araştırmaya kendi isteğimle, hiçbir baskı ve
          zorlama olmaksızın katılmayı kabul ediyorum.
        </b>
        <div className="info">
          <div className="inputs">
            <input
              type="text"
              placeholder="İsim"
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="inputstyle"
            />
            <input
              type="text"
              placeholder="Soyisim"
              onChange={(e) => {
                setSurName(e.target.value);
              }}
            />
          </div>
          <div className="buttons">
            <button
              className="btns btn1"
              onClick={() => {
                customWindow.close();
              }}
            >
              Kabul Etmiyorum
            </button>
            <NavLink
              className="btns btn2"
              to="/Instruction"
              onClick={props.onClick}
              style={{ fontSize: "100%" }}
            >
              Kabul Ediyorum
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
