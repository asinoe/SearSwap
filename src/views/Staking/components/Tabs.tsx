import React, { useState } from 'react';
import { stakings } from '../../../assets/variables';
import StakingCard from './StakingCard';

interface TabProps {
  selectTab: (value)=> void
  apr: number
  totalStake: string
  stakers: string
}

function Tabs({ selectTab, apr, totalStake, stakers } : TabProps) {

  const [tab, setTab] = useState('stake');

  return (
    <div className="row">
      <div className="col-xl-4">
        <ul className="tabs">
          <li className="nav-item">
            <button className={tab === 'stake' ? 'nav-link active' : 'nav-link'} id="stake-tab" type="button" aria-controls="stake" onClick={() => { setTab('stake'); selectTab('stake') }}>Stake</button>
          </li>
          <li className="nav-item">
            <button className={tab === 'unstake' ? 'nav-link active' : 'nav-link'} id="unStake-tab" type="button" aria-controls="unstake" onClick={() => { setTab('unstake'); selectTab('unstake') }}>Unstake</button>
          </li>
          <li className="nav-item">
            <button className={tab === 'withdraw' ? 'nav-link active' : 'nav-link'} id="withdraw-tab" type="button" aria-controls="withdraw" onClick={() => { setTab('withdraw'); selectTab('withdraw') }}>Withdraw</button>
          </li>
        </ul>
      </div>
      <div className="col-xl-8 mt-3 mt-xl-0">
        <div className="tabs-card">
          <div className="row">
            <div className="col-12 col-md-4">
              <StakingCard key={0} name={stakings[0].name} value={stakers}/>
            </div>
            <div className="col-12 col-md-4 mt-3 mt-md-0">
              <StakingCard key={1} name={stakings[1].name} value={totalStake} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tabs;