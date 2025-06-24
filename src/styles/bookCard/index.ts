import { Stack} from "@mui/material";
import { styled } from "@mui/material/styles";
export const BookContainer  = styled(Stack)(({theme}) => ({
    width:'100%', minWidth:'200px', position:'relative', height:'100%',
   [theme.breakpoints.down('md')]: {
          width:'166px',
          minWidth:'166px'
        },

}))