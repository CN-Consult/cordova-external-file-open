/*
THIS SOFTWARE IS PROVIDED BY ANDREW TRICE "AS IS" AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
EVENT SHALL ANDREW TRICE OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

window.ExternalFileUtil = {

	openWith: function ( path, uti, options, success, fail) {
		if (device && device.platform=="iOS")
		{ //iOS (PDF viewer) does not like file:// urls because it uses low-level methods like open() to load it.
			var filePath=path.replace("file://","");
		}
		else var filePath=path;

		if(options == undefined)
			return cordova.exec(success, fail, "ExternalFileUtil", "openWith", [filePath, uti]);
		return cordova.exec(success, fail, "ExternalFileUtil", "openWith", [filePath, uti, options]);
	}
};

module.exports = ExternalFileUtil;