import { Block_1 } from './Block_1';
import { Ceremony } from './Ceremony';
import { InvitationForm } from './Forma';
import { The_Wedding } from './The_Weddig';
import photo1 from '../../../../shared/assets/p3.jpg';
import { Main } from './Main';

export const WeddingInvitation = () => {
    return (
        <div className="text-[#9D8280] bg-[#9D8280] flex flex-col font-cormorant  justify-center">
            <Main />
            <Block_1 />
            <The_Wedding img={photo1} />
            <InvitationForm />
            <Ceremony />
        </div>
    );
};
