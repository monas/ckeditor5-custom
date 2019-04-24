import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class CustomAttach extends Plugin {
	init() {
		const editor = this.editor;
		const t = editor.t;

		editor.ui.componentFactory.add( 'customAttach', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'Attach File' ),
				icon: '<svg aria-labelledby="svg-inline--fa-title-6DrlbJGI7kWZ" data-prefix="icm" data-icon="files-active-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="icon svg-inline--fa fa-files-active-1 fa-w-16 fa-2x"><title id="svg-inline--fa-title-6DrlbJGI7kWZ" class="">files-active-1</title><path fill="currentColor" d="M271.583 957.217c-71.235 0-138.017-26.713-191.443-80.139-106.852-106.852-106.852-280.487 0-387.339l418.504-391.791 31.165 31.165-418.504 391.791c-89.043 89.043-89.043 235.965 0 325.009s235.965 89.043 325.009 0l471.93-467.478c31.165-31.165 44.522-71.235 44.522-111.304s-17.809-80.139-44.522-111.304c-35.617-35.617-84.591-53.426-133.565-44.522-35.617 4.452-66.783 22.261-89.043 44.522l-445.217 422.957c-35.617 35.617-35.617 97.948 0 138.017 40.070 40.070 102.4 40.070 138.017 0l414.052-409.6 31.165 31.165-414.052 409.6c-53.426 53.426-146.922 53.426-200.348 0s-53.426-146.922 0-200.348l445.217-422.957c31.165-31.165 71.235-48.974 115.757-57.878 62.33-8.904 124.661 13.357 169.183 57.878 40.070 40.070 57.878 89.043 57.878 142.47s-17.809 106.852-57.878 142.47l-471.93 467.478c-53.426 53.426-124.661 80.139-195.896 80.139z" class=""></path></svg>',
				tooltip: true
			} );

			// Callback executed once the image is clicked.
			view.on( 'execute', () => {
				editor.fire( 'custom-attach', true );
			} );

			return view;
		} );
	}
}
