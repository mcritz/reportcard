var _items = '\
	<% var itemGroupId = items.name + "_enrolled" %>\
	<% var accessEnabled = items.access %>\
	<div class="item_group" id="<%= items.name %>" >\
		<h3><%= items.name %></h3>\
		<div class="row">\
			<label class="checkbox span4">\
				<input type="checkbox" id="<%= itemGroupId %>" <% (items.access) ? print("checked=\'checked\'") : true %> >\
			Enrolled</label>\
		</div>\
		<div class="row">\
			<ul class="items span8">\
				<% _.each(items.list, function(item) { %>\
					<li class="item <%= item.name %>">\
						<h4><%= item.name %></h4>\
						<div class="row">\
							<span class="span2"><% (item.kind) ? print(item.kind) : print("—"); %></span>\
							<span class="span2">Students: <% (item.people) ? print(item.people) : print("—") %></span>\
							<% if (accessEnabled){ %>\
								<span class="span2">\
									<label class="checkbox">\
										<input type="checkbox" id="<%= item.name %>" <% (item.enrolled) ? print("checked=\'checked\'") : true %> >\
									Enrolled</label>\
								</span>\
							<% } %>\
							<% if (item.enrolled) { %>\
								<span class="span2">Grade: \
									<select class="span-1">\
										<option>—</option>\
										<% _.each(grades, function(grade){ %>\
											<option value="<%= grade.value %>" <% (grade.value == item.value) ? print(\'selected="selected"\') : false %> >\
												<%= grade.name %>\
											</option>\
										<% }) %>\
									</select>\
								</span>\
							<% } %>\
						</div>\
					</li>\
				<% }); %>\
			</ul>\
		</div>\
		<div class="row">\
			<button type="submit" class="btn span2">Update</button>\
		</div>\
	</div>\
';
