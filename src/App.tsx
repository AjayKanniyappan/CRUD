import Page from '@layouts/Page';
import Section from '@layouts/Section';
import { Home } from '@components/index';

export default function App(): JSX.Element {
  return (
    <Page>
      <Section>
        <Home />
      </Section>
    </Page>
  );
}
