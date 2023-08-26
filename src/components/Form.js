import { useContext, useEffect } from "react";
import Likert from "react-likert-scale";
import { Context } from "./context";
import { NavLink } from "react-router-dom";

import { sendDataToServer } from "./Logic/sendDataToServer";
import moment from "moment/moment";

export function Form(props) {
  var { currentIndex, setCurrentIndex, setPage, selectedItems, name, surName } =
    useContext(Context);

  var valence = null;
  var arousal = null;
  var understandability = null;
  var complexity = null;
  var other1 = null;
  var other2 = null;
  var formData = [];
  var overall = [];

  const Valence = {
    responses: [
      { value: 1, text: "1" },
      { value: 2, text: "2" },
      { value: 3, text: "3" },
      { value: 4, text: "4" },
      { value: 5, text: "5" },
      { value: 6, text: "6" },
      { value: 7, text: "7" },
      { value: 8, text: "8" },
      { value: 9, text: "9" },
    ],
    onChange: (val) => {
      valence = val.value;
    },
  };

  const Arousal = {
    responses: [
      { value: 1, text: "1" },
      { value: 2, text: "2" },
      { value: 3, text: "3" },
      { value: 4, text: "4" },
      { value: 5, text: "5" },
      { value: 6, text: "6" },
      { value: 7, text: "7" },
      { value: 8, text: "8" },
      { value: 9, text: "9" },
    ],
    onChange: (val) => {
      arousal = val.value;
    },
  };
  const Understandablity = {
    responses: [
      { value: 1, text: "1" },
      { value: 2, text: "2" },
      { value: 3, text: "3" },
      { value: 4, text: "4" },
      { value: 5, text: "5" },
      { value: 6, text: "6" },
      { value: 7, text: "7" },
      { value: 8, text: "8" },
      { value: 9, text: "9" },
    ],
    onChange: (val) => {
      understandability = val.value;
    },
  };

  const Complexity = {
    responses: [
      { value: 1, text: "1" },
      { value: 2, text: "2" },
      { value: 3, text: "3" },
      { value: 4, text: "4" },
      { value: 5, text: "5" },
      { value: 6, text: "6" },
      { value: 7, text: "7" },
      { value: 8, text: "8" },
      { value: 9, text: "9" },
    ],
    onChange: (val) => {
      complexity = val.value;
    },
  };

  const Other1 = {
    responses: [
      { value: 1, text: "Hayır." },
      { value: 2, text: "Evet, bir ya da birkaç kez ekrana bakamadım." },
      { value: 3, text: "Evet, videonun neredeyse tamamını izleyemedim." },
    ],
    onChange: (val) => {
      other1 = val.text;
    },
  };

  const Other2 = {
    responses: [
      { value: 1, text: "Hayır." },
      { value: 2, text: "Evet." },
    ],
    onChange: (val) => {
      other2 = val.text;
    },
  };

  function onBtnClick(e) {
    if (currentIndex === selectedItems.length - 1) {
      setCurrentIndex(null);
    } else {
      setCurrentIndex(currentIndex + 1);
    }

    setPage("Video");

    formData.push([
      ...formData,
      {
        Name: name,
        Surname: surName,
        Date: moment().format("MMMM Do YYYY, h:mm:ss a"),
        Video: selectedItems[currentIndex].id,
        Type: selectedItems[currentIndex].type,
        valence,
        arousal,
        understandability,
        complexity,
        other1,
        other2,
      },
    ]);

    sendDataToServer(formData);
    console.log(formData, overall);
  }

  useEffect(() => {
    overall.push(formData);
  }, [formData]);

  return (
    <div className="Form">
      <h3>Aşağıdaki soruları izlediğiniz videoyu esas alarak cevaplayınız.</h3>
      <div className="cont">
        <div className="cont1-1">
          <div className="question">
            <p>
              <b>1.</b> Videoyu izlerken kendinizi duygusal olarak ne derece
              olumlu veya olumsuz hissettiğinizi aşağıdaki ölçek üzerinden
              değerlendiriniz.
            </p>
            <div className="scale">
              Tamamen Olumsuz
              <Likert {...Valence} />
              Tamamen Olumlu
            </div>
          </div>
          <div className="questiondark">
            <p>
              <b>
                <span>2.</span>
              </b>{" "}
              Videoyu izlerken kendinizi duygusal olarak ne derecede sakin ya da
              uyarılmış <br /> (heyecanlı) hissettiğinizi aşağıdaki ölçek
              üzerinden değerlendiriniz.
            </p>
            <div className="scale">
              Tamamen Sakin
              <Likert {...Arousal} />
              Tamamen Uyarılmış
            </div>
          </div>
          <div className="question third">
            <p>
              {" "}
              <b>3.</b> Videonun ne derece anlaşılır olduğunuz değerlendiriniz.
            </p>
            <div className="scale">
              Tamamen Anlaşılmaz
              <Likert {...Understandablity} />
              Tamamen Anlaşılır
            </div>
          </div>
          <div className="questiondark">
            <p>
              <b>4.</b> Videonun karmaşılık düzeyini değerlendiriniz.
            </p>
            <div className="scale">
              Hiç Karmaşık Değil
              <Likert {...Complexity} />
              Tamamen Karmaşık
            </div>
          </div>

          <div className="question first">
            <p>
              <b>5.</b> Videoyu izlerken gözlerinizi kapattığınız veya başka bir
              yöne baktığınız oldu mu?
            </p>
            <div className="scale">
              <Likert {...Other1} className="trial" />
            </div>
          </div>
          <div className="questiondark">
            <p>
              {" "}
              <b>6.</b> Videoyu daha önce izlemiş miydiniz?
            </p>
            <div className="scale">
              <Likert {...Other2} className="dual" />
            </div>
          </div>
        </div>

        <div className="btn-cont">
          <NavLink className="btns btn2" to="/Videos" onClick={onBtnClick}>
            DEVAM
          </NavLink>
        </div>
      </div>
    </div>
  );
}
