import { makeStyles, styled } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react'

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: 'var(--sidebar-color)',
    },
})

const Wrapper = styled(Box)(({ theme }) => ({
    
}));

const SideBar = () => {

    const classes = useStyles()

    return (
        <Wrapper className={classes.wrapper}>
            a
        </Wrapper>
    )
}

export default SideBar
