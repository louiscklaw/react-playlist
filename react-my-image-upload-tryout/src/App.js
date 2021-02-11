import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import ProTip from "./ProTip";

import {
  Chip,
  IconButton,
  styled,
  Box,
  TextField,
  Button,
  makeStyles,
  Input,
} from "@material-ui/core";

const default_new_food_detail = {
  unit_price: 0,
  id: "",
  image_url: "",
  name: "",
  min_quantity_per_order: 1,
  tags_raw: "",
  price: 0,
  tags: [],
  update_time: Date.now(),
  description: "",
  max_quantity_per_order: 10,
  food_id: "",
  long_name: "",
};

export default function App() {
  const [image_content, setImageContent] = React.useState(null);
  const file_ref = React.useRef(null);
  const img_ref = React.useRef(null);
  const div_img_ref = React.useRef(null);
  const upload_ref = React.useRef(null);
  const [have_image, setHaveImage] = React.useState(false);

  const [edit_show_detail, setEditShowDetail] = React.useState(
    default_new_food_detail
  );

  const handleFileInput = (e) => {
    let selectedFile = file_ref.current.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      img_ref.current.style["background-image"] = `url('${e.target.result}')`;
      setImageContent(e.target.result);
      setHaveImage(true);
      // setFileToUpload(selectedFile);
    };
    reader.readAsDataURL(selectedFile);

    console.log("selectedFile", "selectedFile");
  };

  const showImageWindow = () => {
    img_ref.current.style.display = "block";
    upload_ref.current.style.display = "none";
  };

  const handleFoodUnitPriceOnChange = (e) => {
    setEditShowDetail({ ...edit_show_detail, unit_price: e.target.value });
  };

  const showUploadWindow = () => {
    img_ref.current.style.display = "none";
    upload_ref.current.style.display = "block";
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <>
          <div className="App">
            <input
              type="file"
              onChange={handleFileInput}
              ref={file_ref}
              style={{ display: "none" }}
            />
            <div
              ref={img_ref}
              style={{
                width: "100%",
                height: "322px",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                // backgroundImage: `url('${image_content}')`,
                backgroundPosition: "center",
              }}
            ></div>
            <div
              ref={upload_ref}
              style={{
                display: "flex",
                flexFlow: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  border: "1px dashed #707070",
                  width: "100%",
                  height: "322px",
                  display: "flex",
                  flexFlow: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  onClick={(e) => {
                    file_ref.current.click();
                  }}
                >
                  画像を追加する
                </button>
              </div>
            </div>
          </div>
          <TextField
            fullWidth
            placeholder=""
            InputProps={{
              disableUnderline: true,
            }}
            value={edit_show_detail.unit_price}
            onChange={handleFoodUnitPriceOnChange}
          />
        </>
      </Box>
    </Container>
  );
}
