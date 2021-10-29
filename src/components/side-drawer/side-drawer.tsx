import { Component, h, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'nn-side-drawer',
  styleUrl: './side-drawer.scss',
  shadow: true,
})
export class SideDrawer {
  @Prop({ reflect: true }) header: string = 'Default Title';
  @Prop({ reflect: true, mutable: true }) opened: boolean = false;

  @State() showContactInfo: boolean = false;

  onCloseDrawer() {
    this.opened = false;
  }

  onContentChange(content: string) {
    this.showContactInfo = content == 'contact' ? true : false;
  }

  @Method()
  open() {
    this.opened = true;
  }

  render() {
    let mainContent = <slot />;

    if (this.showContactInfo) {
      mainContent = (
        <div class="contact-info">
          <h2>Contact Information</h2>
          <p>You can reach us through phone or email</p>
          <ul>
            <li>Phone: 123-456-7890</li>
            <li>
              Email: <a href="mailto:something@something.com">something@something.com</a>
            </li>
          </ul>
        </div>
      );
    }

    return [
      <div class="backdrop" onClick={this.onCloseDrawer.bind(this)} />,
      <aside>
        <header>
          <h1>{this.header}</h1>
          <button onClick={this.onCloseDrawer.bind(this)}>X</button>
        </header>
        <section class="tabs">
          <button class={!this.showContactInfo ? 'active' : ''} onClick={this.onContentChange.bind(this, 'nav')}>
            Navigation
          </button>
          <button class={this.showContactInfo ? 'active' : ''} onClick={this.onContentChange.bind(this, 'contact')}>
            Contact
          </button>
        </section>
        <main>{mainContent}</main>
      </aside>,
    ];
  }
}
