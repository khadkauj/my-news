import { FiberManualRecord, FiberManualRecordOutlined } from '@material-ui/icons'
import React from 'react'
import './Widget.css'
function Widget() {

    const newsArticle = (heading, subtitle) =>{
       return( <div className='widgetArticle'>
            <div className='widgetArticle_left'>
                <FiberManualRecordOutlined />
            </div>
            <div className='WidgetArticle_right'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
       )}





    return (
        <div className='widget'>
            <div className='widget_header'>
                <h2 className='widget_h2'>Today’s most viewed courses</h2>
                </div>
            <div className='widget_news'>
                {newsArticle(' The Six Morning Habits of High Performers', 'Pete Mockaitis | How to Be Awesome at Your Job' ) }
                {newsArticle ('2. Mastering Self-Leadership', 'Laurie Ruettimann')}
                {newsArticle ('3. Critical Thinking for Better Judgment and Decision-Making', 'Becki Saltzman')}
            
            </div>
        </div>
    )
}





export default Widget
