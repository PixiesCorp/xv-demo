import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Animate.module.css";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TextField, styled } from "@mui/material";

const CssTextField = styled(TextField, {
  shouldForwardProp: (props) => props !== "focusColor",
})((p) => ({
  "& label.Mui-focused": {
    color: "#2E3478",
  },
  // focused color for input with variant='outlined'
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#2E3478",
      fontSize: "1.3em",
    },
    borderRadius: "10px",
  },
}));
const textFieldInputLabelStyle = {
  fontSize: "1.3em",
  alignSelf: "center",
  justifySelf: "center",
};
const textFieldStyle = {
  width: "230px",
  height: "30px",
};

export default function Animate() {
  const [isOpen, setIsOpen] = useState(false);

  const CHARACTER_LIMIT = 100

  const [nameEmptyError, setNameEmptyError] = useState(false);
  const [messageEmptyError, setMessageEmptyError] = useState(false);

  const [formData, setFormData] = useState({
    namePerson: "",
    message: "",
  });

  const { namePerson, message } = formData;
  const onChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (namePerson.length < 1) {
      setNameEmptyError(true);
      setTimeout(() => setNameEmptyError(false), 3000);
    } else if (message.length < 1) {
      setMessageEmptyError(true);
      setTimeout(() => setMessageEmptyError(false), 3000);
    } else {

      let url = `https://api.whatsapp.com/send?phone=${+52000000}`;

      url += `&text=Nombre: ${encodeURI(namePerson)}%0A${encodeURI(message)}&app_absent=0`;

      window.open(url);

      // TODO: Enter code here
    }
  };


  return (
    <div className={styles.container}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="modal"
            initial={{
              opacity: 0,
              y: -200,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            exit={{
              opacity: 0,
              y: -200,
            }}
            className={styles.modal}
          >
              <div className={styles.titleFlexMiddle}>
                <div>!Acompañanos!</div>
              </div>
              <div className={styles.searchContactApp}>
                <CssTextField
                  error={nameEmptyError}
                  label='Nombre'
                  placeholder='Nombre'
                  name='namePerson'
                  value={namePerson}
                  onChange={onChange}
                  size='small'
                  style={{
                    margin: "1em 0em",
                  }}
                  inputProps={{
                    style: textFieldStyle,
                  }}
                  InputLabelProps={{
                    style: textFieldInputLabelStyle,
                  }}
                  required
                />
              </div>
              <div className={styles.messageApp} style={{ marginTop: "1.5em"}}>
                <CssTextField
                  multiline
                  maxRows={4}
                  label='Mensaje'
                  placeholder='Enviame tus buenos deseos!....'
                  size='small'
                  InputLabelProps={{
                    style: textFieldInputLabelStyle,
                  }}
                  inputProps={{
                    style: {
                      width: "230px",
                      height: "90px",
                    },
                    maxLength: CHARACTER_LIMIT,
                  }}
                  FormHelperTextProps={{
                    style: {
                      margin: 0,
                      padding: "0 0 0 5px",
                      fontSize: 10,
                      display: "none"
                    },
                  }}
                  name='message'
                  value={message}
                  onChange={onChange}
                  required
                  error={message.length > CHARACTER_LIMIT - 1 || messageEmptyError}
                  helperText={
                    !(message.length > CHARACTER_LIMIT - 1)
                      ? `${message.length}/${CHARACTER_LIMIT}`
                      : "Max length exceeded"
                  }
                />
              </div>
              <div style={{ marginTop: "1.5em", alignSelf: "center"}}>
                  <button onClick={onSubmit} className={styles.sendBtn}>Enviar</button>
              </div>
            <motion.button
              whileTap={{
                scale: 1.2,
              }}
              className={styles.exitbtn}
              onClick={() => setIsOpen(false)}
            >
              <IoMdClose size="2em" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileTap={{
          scale: 1.1,
        }}
        onClick={() => setIsOpen(true)}
        className={styles.btn}
      >
        CONFIRMAR
      </motion.button>
    </div>
  );
}
