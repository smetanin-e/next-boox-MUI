//,{shouldForwardProp: (prop) => prop !== 'src'}
import { Box, IconButton, List, Stack, Typography} from "@mui/material";
import { styled } from "@mui/material/styles";


export const HeaderContainer = styled(Stack)(({theme}) => ({
    width:'100%',
    justifyContent:'space-between',
    alignItems:'center',
    [theme.breakpoints.down('md')]: {
       justifyContent:'center',
    }
}))
export const HeaderLogo = styled('img')(({src,theme}) => ({
    
    src: `url(${src})`,
    width: '90px',
    height: '50px',
    [theme.breakpoints.down('md')]: {
       display: 'none'
    }
}))

export const ActionsCantainerMobile = styled(Box)(() => ({
    margin: 0,
    display: 'flex',
    width:'100%',
    justifyContent:'space-between',
    alignItems:'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    background: '#fefefe'

}))

export const HeaderList = styled(List)(({theme}) => ({
    display: 'flex',
    gap: '30px',
    paddingInlineStart: '40px',
    paddingBlock: '0px',
    [theme.breakpoints.down('md')]: {
        paddingInlineStart: 0,
        paddingTop: '40px',
        gap: '10px',
        flexDirection: 'column',
    }
}))

export const StyledIconButton  = styled(IconButton)(() => ({
    display: 'flex',
    flexDirection: 'column', 
    borderRadius: '2px',

}))

export const ActionsContainer  = styled(Stack)(({theme}) => ({

   [theme.breakpoints.down('md')]: {
          paddingBlockStart: '5px',
          background: '#cecece',
          position: 'fixed',
          bottom: 0,
          width: '100%',
          justifyContent: 'space-around',
          zIndex: 20,
        },

}))

export const ActionsTypography  = styled(Typography)(({theme}) => ({
   [theme.breakpoints.down('md')]: {
          display: 'none'
        },

}))

