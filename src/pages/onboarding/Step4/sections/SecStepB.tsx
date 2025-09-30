import { useState } from "react";
import { Radio } from "../../../../components/ui";

const SecStepB = () => {
    const [stepRadio, setStepRadio] = useState('radio11');

    return (
        <section className='section module-b'>
            <div className="section-header">
                <div className="section-step">4/4</div>
                <h1 className="section-h1">원하는 변화 정도와 회복 기간은 <br />어떻게 생각하나요?</h1>
            </div>
            <div className="section-body">
                <div className='frm-checkbox-group demo-b'>
                    <Radio
                        name="onboardingStep4"
                        module="demo-b"
                        checked={stepRadio === 'radio11'}
                        disabled={false}
                        onClick={()=>{setStepRadio('radio11')}}
                    >
                        간단하게 받고 싶어요 (시술 위주)
                    </Radio>
                    <Radio
                        name="onboardingStep4"
                        module="demo-b"
                        checked={stepRadio === 'radio12'}
                        disabled={false}
                        onClick={()=>{setStepRadio('radio12')}}
                    >
                        확실한 변화를 원해요 (수술 포함)
                    </Radio>
                    <Radio
                        name="onboardingStep4"
                        module="demo-b"
                        checked={stepRadio === 'radio13'}
                        disabled={false}
                        onClick={()=>{setStepRadio('radio13')}}
                    >
                        비용·회복기간 상관 없어요 (둘 다 가능)
                    </Radio>
                </div>
            </div>
        </section>
    )
}
export default SecStepB;