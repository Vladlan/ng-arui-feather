/* tslint:disable:variable-name */
import { Component, EventEmitter, Input, NgModule, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icon/icon.component';
import keyboardCode from '../../lib/keyboard-code.js';

@Component({
  selector: 'aru-collapse',
  styleUrls: ['./collapse.component.scss'],
  template: `
  {{/*  <div
    className={ this.cn({
        expanded
    }) }
    id={ this.props.id }
    data-test-id={ this.props['data-test-id'] }
>
    <div
        ref={ (content) => {
            this.content = content;
        } }
        className={ this.cn('content') }
    >
        <div ref={ (contentCase) => {
            this.contentCase = contentCase;
        } }
        >
            { this.props.children }
        </div>
        <ResizeSensor onResize={ this.updateContentHeight } />
    </div>
    <Link
        className={ this.cn('link') }
        pseudo={ true }
        icon={
            <ToggledIcon size='s' />
        }
        iconPosition='right'
        onClick={ this.handleExpandedChange }
        text={
            expanded
                ? this.props.expandedLabel
                : this.props.collapsedLabel
        }
    />
</div>  */}}
    `,
  encapsulation: ViewEncapsulation.None
})
export class Collapse {
  @Input() type: string;
  @Input() iconPos = 'left';
  @Input() icon: string;
  @Input() width: string;
  @Input() size: string;
  @Input() pseudo: boolean;
  @Input() focused: boolean;
  @Input() hovered: boolean;
  @Input() tabIndex: number;
  @Input() view: string;
  @Input() disabled: boolean;
  @Input() colored: boolean;
  @Input() style: any;
  @Input() styleClass: string;
  @Input() clickHandler: (event) => void;
  @Input() focusHandler: (event) => void;
  @Input() blurHandler: (event) => void;
  @Input() onMouseEnter: (event) => void;
  @Input() onMouseLeave: (event) => void;
  @Input() onMouseDown: (event) => void;
  @Input() onMouseUp: (event) => void;
  @Input() onMouseOut: (event) => void;
  @Input() onKeyDown: (event) => void;
  @Input() onKeyUp: (event) => void;
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  _pressed = false;
  _focused = false;
  _hovered = false;

  handleClick = (event) => {
    if (this.clickHandler) {
      this.clickHandler(event);
    }
  }

  handleFocus = (event) => {
    if (this._pressed) {
      return;
    }

    this._focused = true;

    if (this.focusHandler) {
      this.focusHandler(event);
    }
  }

  handleBlur = (event) => {
    this._focused = false;

    if (this.blurHandler) {
      this.blurHandler(event);
    }
  }

  handleMouseEnter = (event) => {
    if (!this.disabled) {
      this._hovered = true;
    }

    if (this.onMouseEnter) {
      this.onMouseEnter(event);
    }
  }

  handleMouseLeave = (event) => {
    if (!this.disabled) {
      this._hovered = false;
    }

    if (this.onMouseLeave) {
      this.onMouseLeave(event);
    }
  }

  handleMouseDown = (event) => {
    if (!this.disabled) {
      this._pressed = true;
    }

    if (this.onMouseDown) {
      this.onMouseDown(event);
    }
  }

  handleMouseUp = (event) => {
    if (!this.disabled) {
      this._pressed = false;
    }

    if (this.onMouseUp) {
      this.onMouseUp(event);
    }
  }

  handleMouseOut = (event) => {
    if (!this.disabled) {
      this._pressed = false;
    }

    if (this.onMouseOut) {
      this.onMouseOut(event);
    }
  }

  handleKeyDown = (event) => {
    if ((event.which === keyboardCode.ENTER || event.which === keyboardCode.SPACE) && !this.disabled) {
      this._pressed = true;
    }

    if (this.onKeyDown) {
      this.onKeyDown(event);
    }
  }

  handleKeyUp = (event) => {
    if ((event.which === keyboardCode.ENTER || event.which === keyboardCode.SPACE) && !this.disabled) {
      this._pressed = false;
    }

    if (this.onKeyUp) {
      this.onKeyUp(event);
    }
  }
}

@NgModule({
  imports: [CommonModule, IconModule],
  exports: [Collapse],
  declarations: [Collapse]
})
export class CollapseModule {
}
