import { useParams } from 'react-router-dom';
import ForgeText from '../components/ForgeText';
import ForgeImage from '../components/ForgeImage';
import ForgeButton from '../components/ForgeButton';

interface DynamicPageProps {
  title?: string;
}

const DynamicPage = ({ title }: DynamicPageProps) => {
  const { path } = useParams();
  const pageId = path || 'dynamic';

  return (
    <div className="welcome-container" style={{ paddingBottom: '100px' }}>
      <header style={{ textAlign: 'center', marginBottom: '60px' }}>
        <ForgeText 
          id={`${pageId}_hero_title`}
          tagName="h1"
          defaultText={title || "NEW BATTLE PLAN"}
          style={{ fontSize: '3.5rem', color: '#ff3c3c', textTransform: 'uppercase' }}
        />
        <ForgeText 
          id={`${pageId}_hero_subtitle`}
          defaultText="This page was forged in the fires of the rebellion."
          style={{ fontStyle: 'italic', color: '#888', marginTop: '10px' }}
        />
      </header>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
        <section style={{ marginBottom: '60px' }}>
          <ForgeImage 
            id={`${pageId}_main_img`}
            defaultSrc="https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop"
            alt="Page Visual"
            style={{ borderRadius: '15px', border: '1px solid #333' }}
          />
        </section>

        <section style={{ lineHeight: '1.8', fontSize: '1.2rem' }}>
          <ForgeText 
            id={`${pageId}_content_p1`}
            defaultText="The state says you're a statistic. The world says you're a write-off. But here, we know the truth. Every scar is a story, and every story is a weapon. Start writing the next chapter of your rebellion here."
          />
          
          <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            <ForgeButton id={`${pageId}_btn_1`} defaultText="ACTION 1" defaultTo="#" />
            <ForgeButton id={`${pageId}_btn_2`} defaultText="ACTION 2" defaultTo="#" />
            <ForgeButton id={`${pageId}_btn_3`} defaultText="ACTION 3" defaultTo="#" />
            <ForgeButton id={`${pageId}_btn_4`} defaultText="ACTION 4" defaultTo="#" />
            <ForgeButton id={`${pageId}_btn_5`} defaultText="ACTION 5" defaultTo="#" />
          </div>
        </section>

        <section style={{ marginTop: '80px', padding: '40px', backgroundColor: '#0a0a0a', borderRadius: '15px', border: '1px solid #222' }}>
          <ForgeText 
            id={`${pageId}_extra_title`}
            tagName="h3"
            defaultText="REBELLION INTEL"
            style={{ color: '#ff3c3c', marginBottom: '20px' }}
          />
          <ForgeText 
            id={`${pageId}_extra_content`}
            defaultText="Use this space for deep intel, mission parameters, or raw truth. Shape it in the Forge."
          />
        </section>
      </div>
    </div>
  );
};

export default DynamicPage;
