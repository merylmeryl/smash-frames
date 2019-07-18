import React from 'react';

var barWidth = 8;

function RenderBars({ numStartup, numActive, numRecovery }) {
  let frameBar = [];
  var i;
  for (i = 0; i < numStartup; i++) {
    frameBar.push(
      <div key={i + 's'} style={{
        position: 'absolute',
        width: '6px',
        height: '44px',
        left: i * barWidth + 'px',
        top: '0px',
        bottom: '0px',
        background: '#FFED65',
        border: '2px transparent',
        borderRadius: '4px',
      }}>
      </div>
    );
  }

  for (i; i < numStartup + numActive; i++) {
    frameBar.push(
      <div key={i + 'a'} style={{
        position: 'absolute',
        width: '6px',
        height: '44px',
        left: i * barWidth + 'px',
        top: '0px',
        bottom: '0px',
        background: '#00CC44',
        border: '2px transparent',
        borderRadius: '4px',
        zIndex: '3',
      }}>
      </div>
    );
  }
  console.log(i);

  for (i; i < numStartup + numActive + numRecovery; i++) {
    frameBar.push(
      <div key={i + 'r'} style={{
        position: 'absolute',
        width: '6px',
        height: '44px',
        left: i * barWidth + 'px',
        top: '0px',
        bottom: '0px',
        background: '#E31919',
        border: '2px transparent',
        borderRadius: '4px',
        zIndex: '3',
      }}>
      </div>
    );
  }
  console.log(i);

  return (
    <div style=
      {{
        position: 'absolute',
        left: '27.07%',
        right: '2.13%',
        top: '54.5%',
        bottom: '20.6%',
        marginLeft: '6px',
      }}>
      {frameBar}
    </div>
  )
}

function MoveBox(props) {

  return (
    <div className="bigBox"
      style={{
        position: 'relative',
        width: '1596px',
        height: '370px',
        left: '162px',
      }}>
      <div className="boxTitle"
        style={{
          position: 'absolute',
          left: '0.13%',
          top: '3.24%',
          bottom: '83.78%',

          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWight: '900',
          fontSize: '50px',
          lineHeight: '95.62%',
          /* identical to box height, or 48px */

          letterSpacing: '-0.065em',
          textTransform: 'uppercase',
        }}>
        {/* {props.moveType}: {props.moveName} */}
        {props.moveName}
      </div>
      <div className="moveInfoBox"
        style={{
          position: 'absolute',
          left: '0%',
          right: '0%',
          top: '80px',
          bottom: '0px',
          border: '2px solid #425055',
          boxSizing: 'border-box',
          borderRadius: '10px'
        }}>
      </div>
      <div className="buttons"
        style={{
          position: 'absolute',
          width: '100px',
          left: '0px',
          top: '80px',
          bottom: '82px',
          background: '#D3362F',
          borderRadius: '10px 0px 0px 0px',
        }}>

      </div>
      <div className="moveImage"
        style={{
          position: 'absolute',
          width: '312px',
          height: '208px',
          left: '100px',
          top: '80px',
        }}></div>
      <div className="totalFrames"
        style={{
          position: 'absolute',
          left: '27.13%',
          top: '25.68%',
          bottom: '61.35%',

          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: '50px',
          lineHeight: '95.62%',
          /* identical to box height, or 48px */

          letterSpacing: '-0.065em',
          textTransform: 'uppercase',
          borderRadius: '4px',
          color: '#90A4AE'
        }}>FRAMES: {props.totalFrames}</div>
      <div className="baseDmg"
        style={{
          position: 'absolute',
          left: '48.5%',
          right: '25.5%',
          top: '25.68%',
          bottom: '61.35%',

          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: '50px',
          lineHeight: '95.62%',
          /* identical to box height, or 48px */

          letterSpacing: '-0.065em',
          textTransform: 'uppercase',

          /* Space dust (light) Gray */

          color: '#90A4AE',
          borderRadius: '4px',
        }}>{props.baseDamage + '%'}</div>
      <div className="SOS"
        style={{
          position: 'absolute',
          left: '85.46%',
          right: '2.44%',
          top: '25.68%',
          bottom: '61.35%',

          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: '50px',
          lineHeight: '95.62%',
          letterSpacing: '-0.065em',
          textTransform: 'uppercase',
          color: '#90A4AE',
          borderRadius: '4px',
        }}>SOS: NO</div>
      <div className="startupText" style={{
        position: 'absolute',
        width: '132px',
        height: '29px',
        left: '433px',
        top: '157px',

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '30px',
        lineHeight: '95.62%',
        letterSpacing: '-0.065em',
        textTransform: 'capitalize',
        color: '#90A4AE',
      }}>Startup: {props.startup}</div>
      <div className="activeText" style={{
        position: 'absolute',
        width: '118px',
        height: '29px',
        left: '686px',
        top: '157px',

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '30px',
        lineHeight: '95.62%',
        /* identical to box height, or 29px */

        letterSpacing: '-0.065em',
        textTransform: 'capitalize',
        color: '#90A4AE',
      }}>Active: {props.active}</div>
      <div className="recoveryText"
        style={{
          position: 'absolute',
          width: '155px',
          height: '29px',
          left: '972px',
          top: '157px',

          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: '30px',
          lineHeight: '95.62%',
          letterSpacing: '-0.065em',
          textTransform: 'capitalize',
          color: '#90A4AE',
        }}>Recovery: {props.recovery}</div>
      <div className="timelineBar"
        style={{
          position: 'absolute',
          width: '1130px',
          height: '56px',
          left: '432px',
          top: '196px',
          background: '#425055',
          border: '3px solid #B7C7CC',
          boxSizing: 'border-box',
          borderRadius: '4px',
        }}></div>

      <RenderBars numStartup={props.startup} numActive={props.active} numRecovery={props.recovery} />

      <div className="additionalStats"></div>
      <div className="divider"></div>
      <div className="notes" style={{
        position: 'absolute',
        width: '66px',
        height: '29px',
        left: '20px',
        top: '315px',

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '30px',
        lineHeight: '95.62%',
        letterSpacing: '-0.065em',
        textTransform: 'capitalize',
        color: '#90A4AE',
      }}>Note: </div>
      <div style={{
        position: 'absolute',
        width: '874px',
        height: '57px',
        left: '100px',
        top: '305px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '95.62%',
        display: 'flex',
        alignItems: 'center',
        letterSpacing: '-0.065em',
        color: '#90A4AE',
      }}>{props.notes}</div>
      <div className="shieldLagText" style={{
        position: 'absolute',
        width: '131px',
        height: '29px',
        left: '1169px',
        top: '315px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '30px',
        lineHeight: '95.62%',
        letterSpacing: '-0.065em',
        textTransform: 'capitalize',
        color: '#90A4AE',
      }}>Shield Lag:</div>
      <div style={{
        position: 'absolute',
        width: '33px',
        height: '29px',
        left: '1301px',
        top: '315px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '30px',
        lineHeight: '95.62%',
        letterSpacing: '-0.065em',
        textTransform: 'capitalize',
        color: '#425055',
      }}>17</div>
      <div className="shieldStunText" style={{
        position: 'absolute',
        width: '142px',
        height: '29px',
        left: '1380px',
        top: '315px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '30px',
        lineHeight: '95.62%',
        letterSpacing: '-0.065em',
        textTransform: 'capitalize',
        color: '#90A4AE',
      }}>Shield Stun:</div>
      <div style={{
        position: 'absolute',
        width: '33px',
        height: '29px',
        left: '1523px',
        top: '315px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '30px',
        lineHeight: '95.62%',
        letterSpacing: '-0.065em',
        textTransform: 'capitalize',
        color: '#425055',
      }}>17</div>
    </div>
  );
}

export default MoveBox;    