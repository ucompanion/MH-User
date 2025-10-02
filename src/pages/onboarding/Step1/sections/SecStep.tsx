import { useState } from "react";
import { Radio } from "../../../../components/ui";

const SecStep = () => {
    const [stepRadio, setStepRadio] = useState('radio11');

    return (
        <section className='section module-b'>
            <div className="section-header">
                <div className="section-step">1/4</div>
                <h1 className="section-h2">IPPEO를 <br />어떤 목적으로 이용하시나요?</h1>
            </div>
            <div className="section-body">
                <div className='frm-checkbox-group demo-b'>
                    <Radio
                        name="onboardingStep1"
                        module="demo-b"
                        checked={stepRadio === 'radio11'}
                        disabled={false}
                        onClick={()=>{setStepRadio('radio11')}}
                    >
                        <strong className='label-tit'>정보 탐색</strong>
                        <span className='label-txt'>성형/피부에 관심 있어 한국에서 해보고 싶어요.</span>
                    </Radio>
                    <Radio
                        name="onboardingStep1"
                        module="demo-b"
                        checked={stepRadio === 'radio12'}
                        disabled={false}
                        onClick={()=>{setStepRadio('radio12')}}
                    >
                        <strong className='label-tit'>시술 목적</strong>
                        <span className='label-txt'>고민하는 부위와 받고 싶은 시술이 정해져 있어요.</span>
                    </Radio>
                </div>
            </div>
        </section>
    )
}
export default SecStep;