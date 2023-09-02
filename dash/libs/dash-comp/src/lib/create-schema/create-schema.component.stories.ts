import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CreateSchemaComponent } from './create-schema.component';

export default {
  title: 'CreateSchemaComponent',
  component: CreateSchemaComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<CreateSchemaComponent>;

const Template: Story<CreateSchemaComponent> = (args: CreateSchemaComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}