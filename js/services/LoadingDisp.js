
// use jQuery

var LoadingDisp = function (pullDown) {
	var loading = false;
	
	this.loading = function (status, abortCallback) {return;
		if (status === true) {
			if (loading === true) return abortCallback();
			
			loading = true;
			pullDown.loading(true);
			pullDown.element.bind('pullDownStopWorking', function (ev) {
				loading = false;
				pullDown.element.unbind('pullDownStopWorking');
				abortCallback();
			})
		} else {
			loading = false;
			pullDown.loading(false);
		}
	};

	this.onReload = function (callback) {return;
		pullDown.container.off('pullDown').on('pullDown', function (ev) {
			callback();
		});
	};

};

myRetail.factory('loadingDisp', function () {
	var loadingDisp = new LoadingDisp();
	return loadingDisp;
});
