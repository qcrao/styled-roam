import { html } from 'htm/react'
import React from 'react'
import ReactDOM from 'react-dom'
import './ShareMemex.less'

export function Footer({ blocksNum, usageDays, block }) {
  return (
    <>
      <div className="footer">
        <div className="stat">
          <span>{blocksNum} BLOCKS · </span>
          <span>{usageDays} DAYS</span>
        </div>
        <div className="author">
          <span className="at">𐃏</span>
          <span className="username">
            <a href="https://qcrao.com">qcrao.com</a>
          </span>
        </div>
      </div>
      <img src="" className="share-card" />
    </>
  )
}

export function Header({ block }) {
  return (
    <div className="memo">
      <div className="time">
        {new Date(block.time).toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })}
      </div>
      <div className="content">
        <p>{block.string}</p>
        <p />
        <p>
          <span className="tag">{'#' + block.tags.join('# ')}</span>
        </p>
      </div>
    </div>
  )
}

export const ShareMemex = ({ block, usageDays, blocksNum, onClose, onSave }) => {
  return html`
    <div class="bp3-dialog-container share-memex-container">
      <div class="bp3-dialog">
        <div class="bp3-dialog-header">
          <span class="bp3-icon-large bp3-icon-media"></span>
          <h4 class="bp3-heading">Share Zettel Image</h4>
          <button
            aria-label="Close"
            class="bp3-dialog-close-button bp3-button bp3-minimal bp3-icon-cross"
            onClick=${onClose}
          ></button>
        </div>
        <div class="bp3-dialog-body">
          <div class="tips">
            <p>Please waiting for the image to be generated...</p>
          </div>
          <div class="card">
            <${Header} block=${block} />
            <${Footer} blocksNum=${blocksNum} usageDays=${usageDays} block=${block} />
          </div>
        </div>
        <div class="bp3-dialog-footer">
          <div class="bp3-dialog-footer-actions">
            <button type="button" class="bp3-button" onClick=${onClose}>Close</button>
            <button type="submit" class="bp3-button bp3-intent-primary" onClick=${onSave}>Save Again</button>
          </div>
        </div>
      </div>
    </div>
  `
}

export function renderFooter(blocksNum, usageDays, memo) {
  ReactDOM.render(
    html`<${Footer} blocksNum=${blocksNum} usageDays=${usageDays} block=${memo} />`,
    document.getElementById('share-card-footer'),
  )
}

export function renderHeader(memo) {
  ReactDOM.render(html`<${Header} block=${memo} />`, document.getElementById('share-card-header'))
}
