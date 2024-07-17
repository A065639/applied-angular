import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserSoftwareFeature } from '../../state/reducers/user-software.feature';

@Component({
  selector: 'app-begin',
  standalone: true,
  imports: [],
  template: ` <div>
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">We'd love to help!</h2>
        <p>What software are you having problems with?</p>
        <p>You can make multiple requests for different software.</p>
        <div>
          <div class="card-actions justify-start">
            <div class="flex">
              <div>
                <div>
                  <label class="input input-bordered flex items-center gap-2">
                    <input type="text" class="grow" placeholder="Search" />
                    <span class="badge badge-info">?</span>
                  </label>
                </div>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Software</th>
                    </tr>
                  </thead>
                  <tbody>
                    @for(item of software(); track item.id; let e = $even){
                    @if(e){
                    <tr class="hover">
                      {{
                        item.name
                      }}
                    </tr>
                    } @else {
                    <tr>
                      {{
                        item.name
                      }}
                    </tr>
                    // Be carefule using the empty, may only be empty while
                    awaiting API response } } @empty {
                    <p>You have no software.</p>
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul class="steps w-full pt-8">
        <li class="step step-primary">Software</li>
        <li class="step">Operating System</li>
        <li class="step">Description</li>
        <li class="step">Send it</li>
      </ul>
    </div>
    <pre class="p-8">
        Need a way to say how and when to move to the next step.
        Question: Should we show them all, or just the ones they are entitled for?
            Perhaps: "If your operating system isn't listed here, please tell us in the description?"
            Or: List them all, but indicate which they are entitled for, and give them the option of selecting others as "unlisted".
        Feature: Automatically select the operating system they are currently using.
</pre
    >
  </div>`,
  styles: ``,
})
export class BeginComponent {
  // The # sign makes the variable private
  #store = inject(Store);
  software = this.#store.selectSignal(UserSoftwareFeature.selectList);
}
