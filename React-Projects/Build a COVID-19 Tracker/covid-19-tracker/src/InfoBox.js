import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import './InfoBox.css'

function InfoBox({ title, cases, total, active, isRed, ...props }) {
    return (
        <Card
            className={`infoBox ${active && "infoBox--selected"} ${isRed && "infoBox--red"}`}
            onClick={props.onClick}>
            <CardContent>
                <Typography className="infoBox_title" color="textSecondary">
                    {title}
                </Typography>
                <h2 className="infoBox_cases">{cases}</h2>
                <Typography className="infoBox_total" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
