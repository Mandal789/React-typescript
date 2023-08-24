import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { ListItemIcon, Collapse } from "@mui/material";

export default function Department() {
  const [AllCheck, setAllcheck] = React.useState<boolean>();
  const [AllCheck1, setAllcheck1] = React.useState<boolean>();
  const [expand, setexpand] = React.useState<boolean>();
  const [expand1, setexpand1] = React.useState<boolean>();

  const [state, setState] = React.useState({
    support: false,
    customer_success: false,
  });

  const [state1, setState1] = React.useState({
    graphic_design: false,
    product_design: false,
    web_design: false,
  });

  const customer_serviceDepartment = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const designDepartment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState1({
      ...state1,
      [event.target.name]: event.target.checked,
    });
  };

  const checkAlldepart = () => {
    setAllcheck(!AllCheck);
    if (AllCheck) {
      setState({
        support: true,
        customer_success: true,
      });
    } else {
      setState({
        support: !true,
        customer_success: !true,
      });
    }
  };

  const checkAlldepart1 = () => {
    setAllcheck1(!AllCheck1);
    if (AllCheck1) {
      setState1({
        graphic_design: true,
        product_design: true,
        web_design: true,
      });
    } else {
      setState1({
        graphic_design: false,
        product_design: false,
        web_design: false,
      });
    }
  };

  const expandHandler1 = () => {
    setexpand(!expand);
  };

  const expandHandler2 = () => {
    setexpand1(!expand1);
  };

  const { support, customer_success } = state;
  const { graphic_design, product_design, web_design } = state1;

  return (
    <>
      <ListItemIcon onClick={expandHandler1}>
        <HorizontalRuleIcon sx={{ marginRight: 3 }} />
      </ListItemIcon>
      <FormControlLabel
        label="customer_service"
        control={
          <Checkbox
            checked={state.customer_success && state.support}
            onChange={checkAlldepart}
          />
        }
      />
      <Collapse in={expand} sx={{ marginLeft: 8 }}>
        <Box sx={{ display: "flex" }}>
          <FormControl
            sx={{ marginLeft: 5 }}
            component="fieldset"
            variant="standard"
          >
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={support}
                    onChange={customer_serviceDepartment}
                    name="support"
                  />
                }
                label="Gilad Gray"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={customer_success}
                    onChange={customer_serviceDepartment}
                    name="customer_success"
                  />
                }
                label="Jason Killian"
              />
            </FormGroup>
          </FormControl>
        </Box>
      </Collapse>

      <ListItemIcon onClick={expandHandler2}>
        <HorizontalRuleIcon sx={{ marginRight: 3 }} />
      </ListItemIcon>
      <FormControlLabel
        label="customer_service"
        control={
          <Checkbox
            checked={
              state1.graphic_design &&
              state1.product_design &&
              state1.web_design
            }
            onChange={checkAlldepart1}
          />
        }
      />
      <Collapse in={expand1} sx={{ marginLeft: 8 }}>
        <Box sx={{ display: "flex" }}>
          <FormControl
            sx={{ marginLeft: 5 }}
            component="fieldset"
            variant="standard"
          >
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={graphic_design}
                    onChange={designDepartment}
                    name="graphic_design"
                  />
                }
                label="graphic_design"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={product_design}
                    onChange={designDepartment}
                    name="product_design"
                  />
                }
                label="product_design"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={web_design}
                    onChange={designDepartment}
                    name="web_design"
                  />
                }
                label="web_design"
              />
            </FormGroup>
          </FormControl>
        </Box>
      </Collapse>
      <APIComponent/>
    </>
  );
}

interface jsondata {
  userid: number;
  id: number;
  title: string;
}
const APIComponent = () => {
  const [data, setdata] = React.useState<jsondata[]>([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response)
      .then((e) => e.json())
      .then((e) => setdata(e as jsondata[]));
  }, []);


  return(
    <>
    {
        data.map((data) =>(
            <li>{data.title}</li>
        ))
    }
    </>
   )

};

   


