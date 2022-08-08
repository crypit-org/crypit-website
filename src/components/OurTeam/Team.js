import React from 'react';
import "./team.css"

import TeamMember from './TeamMember';

function Team() {
    return (
        <div className='team-cont'>
            <div className='title'>
                <h2 className='team-head'> With some of the most forward-thinking angels </h2>
            </div>
            <div className="sellercards">
                    {/* <TeamMate name="User1" designation="Regulatory Officer" about="Before founding FTX, Sam was a trader on Jane Street Capital’s international ETF desk. He traded a variety of ETFs, futures, currencies, and equities, and designed their automated OTC trading system. He graduated from MIT with a degree in physics." src={person} />
                    <TeamMate  name="User2"designation="General Counsel"    about="Before founding FTX, Sam was a trader on Jane Street Capital’s international ETF desk. He traded a variety of ETFs, futures, currencies, and equities, and designed their automated OTC trading system. He graduated from MIT with a degree in physics." src={person2}/>
                    <TeamMate name="User3" designation="CTO and Founder"    about="Before founding FTX, Sam was a trader on Jane Street Capital’s international ETF desk. He traded a variety of ETFs, futures, currencies, and equities, and designed their automated OTC trading system. He graduated from MIT with a degree in physics." src={person3}/> */}
                <TeamMember/>
                </div>

                </div>
    );
}


export default Team;