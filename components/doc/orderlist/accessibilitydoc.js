import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function AccessibilityDoc() {
    const code = {
        basic: `
<span id="lb">Options</span>
<OrderList aria-labelledby="lb" />

<OrderList aria-label="City" />
    `
    };

    return (
        <DocSectionText id="accessibility" label="Accessibility">
            <h3>Screen Reader</h3>
            <p>
                Value to describe the listbox can be provided with <i>listProps</i> by passing <i>aria-labelledby</i> or <i>aria-label</i> props. The list element has a <i>listbox</i> role with the <i>aria-multiselectable</i> attribute. Each list
                item has an <i>option</i> role with <i>aria-selected</i> and <i>aria-disabled</i> as their attributes.
            </p>
            <p>
                Controls buttons are <i>button</i> elements with an <i>aria-label</i> that refers to the <i>aria.moveTop</i>, <i>aria.moveUp</i>, <i>aria.moveDown</i> and <i>aria.moveBottom</i> properties of the <Link href="/locale">locale</Link> API
                by default, alternatively you may use
                <i>moveTopButtonProps</i>, <i>moveUpButtonProps</i>, <i>moveDownButtonProps</i> and <i>moveBottomButtonProps</i> to customize the buttons like overriding the default <i>aria-label</i> attributes.
            </p>

            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />

            <h3>ListBox Keyboard Support</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Key</th>
                            <th>Function</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <i>tab</i>
                            </td>
                            <td>Moves focus to the first selected option, if there is none then first option receives the focus.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>up arrow</i>
                            </td>
                            <td>Moves focus to the previous option.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>down arrow</i>
                            </td>
                            <td>Moves focus to the next option.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>enter</i>
                            </td>
                            <td>Toggles the selected state of the focused option.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>space</i>
                            </td>
                            <td>Toggles the selected state of the focused option.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>home</i>
                            </td>
                            <td>Moves focus to the first option.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>end</i>
                            </td>
                            <td>Moves focus to the last option.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>shift</i> + <i>down arrow</i>
                            </td>
                            <td>Moves focus to the next option and toggles the selection state.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>shift</i> + <i>up arrow</i>
                            </td>
                            <td>Moves focus to the previous option and toggles the selection state.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>shift</i> + <i>space</i>
                            </td>
                            <td>Selects the items between the most recently selected option and the focused option.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>control</i> + <i>shift</i> + <i>home</i>
                            </td>
                            <td>Selects the focused options and all the options up to the first one.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>control</i> + <i>shift</i> + <i>end</i>
                            </td>
                            <td>Selects the focused options and all the options down to the first one.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>control</i> + <i>a</i>
                            </td>
                            <td>Selects all options.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Buttons Keyboard Support</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Key</th>
                            <th>Function</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <i>enter</i>
                            </td>
                            <td>Executes button action.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>space</i>
                            </td>
                            <td>Executes button action.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </DocSectionText>
    );
}
