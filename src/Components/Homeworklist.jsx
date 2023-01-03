import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
export default function SimpleAccordion() {
  const homeworkitems = [
    {
     class_no:1,
     teacher:"Hameed shaik",
     sub:[{
      sub_name:"English",
      content:"Learn and write phonetics and vowels"
     },{
      sub_name:"Telugu",
      content:"Learn and write sandulu and samaasalu"
     }
    
    ]


    },
    {
      class_no:2,
      teacher:"pity parker",
      sub:[{
       sub_name:"English",
       content:"Learn and write parts of speech"
      },{
       sub_name:"Telugu",
       content:"Learn and write alankaralu"
      }
     
     ]
    },
    {
      class_no:3,
      teacher:"manikanta",
      sub:[{
       sub_name:"English",
       content:"Learn and write voices"
      },{
       sub_name:"Telugu",
       content:"Learn and write prati padardalu"
      }
     
     ]
    }
  ]
  return (
    <div className="p-5">
    {homeworkitems.map(item=>(
      <Accordion sx={{m:3}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{`Class ${item.class_no}`}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Card>
          <Card.Body>
          <Card.Title>{`Teacher name : ${item.teacher}`}</Card.Title>
            <Card.Text>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Homework</th>
                  </tr>
                </thead>
                {item.sub.map(element=>(
                  <tbody>
                  <tr>
                    <td>{element.sub_name}</td>
                    <td>{element.content}</td>
                  </tr>
                 
                </tbody>
                ))}
                
              </Table>
            </Card.Text>
          </Card.Body>
        </Card>
      </AccordionDetails>
    </Accordion>

    ))}
      
      
    </div>
  );
}
